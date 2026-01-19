import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

export interface TableResult<T> {
    items: T[];
    count: number;
    filteredCount: number;
}

export interface Filter<S = any> {
    data: S;
    orderBy?: { field: string; direction: 'asc' | 'desc' };
    pageNumber: number;
    pageSize: number;
}

export class TableController<T, S = any> {
    public filter: Filter<S>;
    public items: T[] = [];
    public count: number = 0;
    public filteredCount: number = 0;
    public isLoading = false;

    public refresh$ = new Subject<void>();
    public filter$ = new Subject<boolean>();
    private stoppingSignal = new Subject<void>();

    constructor(
        private callback: (filter: Filter<S>) => Observable<TableResult<T>>,
        initialFilter: Partial<Filter<S>> = {}
    ) {
        this.filter = {
            data: {} as S,
            pageNumber: 0,
            pageSize: 10,
            ...initialFilter
        };
    }

    public start(): void {
        this.filter$
            .pipe(
                takeUntil(this.stoppingSignal),
                switchMap((resetPage) => {
                    if (resetPage) this.filter.pageNumber = 0;
                    this.isLoading = true;
                    this.refresh$.next();
                    return this.callback(this.filter);
                })
            )
            .subscribe((result) => {
                this.items = result.items;
                this.count = result.count;
                this.filteredCount = result.filteredCount;
                this.isLoading = false;
                this.refresh$.next();
            });

        // Initial load
        this.filter$.next(false);
    }

    public stop(): void {
        this.stoppingSignal.next();
        this.stoppingSignal.complete();
    }
}
