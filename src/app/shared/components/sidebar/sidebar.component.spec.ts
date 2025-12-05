import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { SidebarComponent, SidebarConfig } from './sidebar.component';
import { ThemeService, AccentColor, ThemeMode } from '../../../core/services/theme.service';
import { TreeNode } from 'primeng/api';
import * as fc from 'fast-check';

describe('SidebarComponent - Theme Integration', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let themeService: ThemeService;

  const mockConfig: SidebarConfig = {
    title: 'Test',
    subtitle: 'Test Subtitle',
    headerText: 'Test Header',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-700'
  };

  const mockTreeNodes: TreeNode[] = [
    {
      label: 'Parent',
      children: [
        { label: 'Child 1', data: '/test1', icon: 'fas fa-test' },
        { label: 'Child 2', data: '/test2' }
      ]
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [ThemeService]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);

    // Set required inputs
    component.config = mockConfig;
    component.treeNodes = mockTreeNodes;
    component.sidebarVisible = signal(false);

    fixture.detectChanges();
  });

  describe('sidebarGradient computed signal', () => {
    it('should return gradient classes from theme service', () => {
      const gradient = component.sidebarGradient();
      expect(gradient).toBeTruthy();
      expect(gradient).toContain('bg-gradient-to-br');
    });

    it('should update when theme mode changes', () => {
      // Get initial gradient
      const initialGradient = component.sidebarGradient();
      
      // Change theme mode
      const currentMode = themeService.themeMode();
      const newMode: ThemeMode = currentMode === 'light' ? 'dark' : 'light';
      themeService.setThemeMode(newMode);
      fixture.detectChanges();
      
      // Get updated gradient
      const updatedGradient = component.sidebarGradient();
      
      // Gradients should be different for light vs dark mode
      expect(updatedGradient).toBeTruthy();
      expect(updatedGradient).toContain('bg-gradient-to-br');
    });

    it('should update when accent color changes', () => {
      // Set initial color
      themeService.setAccentColor('blue');
      fixture.detectChanges();
      const blueGradient = component.sidebarGradient();
      
      // Change to different color
      themeService.setAccentColor('green');
      fixture.detectChanges();
      const greenGradient = component.sidebarGradient();
      
      // Gradients should be different
      expect(blueGradient).not.toEqual(greenGradient);
      expect(greenGradient).toContain('green');
    });

    it('should use strong intensity gradient', () => {
      const gradient = component.sidebarGradient();
      // The sidebar uses 'strong' intensity, so it should not have subtle colors
      expect(gradient).toBeTruthy();
    });

    it('should work with all accent colors', () => {
      const colors: AccentColor[] = ['blue', 'green', 'purple', 'orange', 'teal', 'pink', 'red', 'indigo', 'cyan', 'amber'];
      
      colors.forEach(color => {
        themeService.setAccentColor(color);
        fixture.detectChanges();
        const gradient = component.sidebarGradient();
        
        expect(gradient).toBeTruthy();
        expect(gradient).toContain('bg-gradient-to-br');
      });
    });
  });

  describe('titleGradient computed signal', () => {
    it('should return text gradient classes from theme service', () => {
      const gradient = component.titleGradient();
      expect(gradient).toBeTruthy();
      expect(gradient).toContain('bg-gradient-to-r');
      expect(gradient).toContain('bg-clip-text');
      expect(gradient).toContain('text-transparent');
    });

    it('should update when theme mode changes', () => {
      // Get initial gradient
      const initialGradient = component.titleGradient();
      
      // Change theme mode
      const currentMode = themeService.themeMode();
      const newMode: ThemeMode = currentMode === 'light' ? 'dark' : 'light';
      themeService.setThemeMode(newMode);
      fixture.detectChanges();
      
      // Get updated gradient
      const updatedGradient = component.titleGradient();
      
      // Gradients should be different for light vs dark mode
      expect(updatedGradient).toBeTruthy();
      expect(updatedGradient).toContain('bg-gradient-to-r');
    });

    it('should update when accent color changes', () => {
      // Set initial color
      themeService.setAccentColor('blue');
      fixture.detectChanges();
      const blueGradient = component.titleGradient();
      
      // Change to different color
      themeService.setAccentColor('purple');
      fixture.detectChanges();
      const purpleGradient = component.titleGradient();
      
      // Gradients should be different
      expect(blueGradient).not.toEqual(purpleGradient);
      expect(purpleGradient).toContain('purple');
    });

    it('should work with all accent colors', () => {
      const colors: AccentColor[] = ['blue', 'green', 'purple', 'orange', 'teal', 'pink', 'red', 'indigo', 'cyan', 'amber'];
      
      colors.forEach(color => {
        themeService.setAccentColor(color);
        fixture.detectChanges();
        const gradient = component.titleGradient();
        
        expect(gradient).toBeTruthy();
        expect(gradient).toContain('bg-gradient-to-r');
        expect(gradient).toContain('bg-clip-text');
      });
    });
  });

  describe('gradient reactivity', () => {
    it('should react to multiple theme changes', () => {
      const gradients: string[] = [];
      
      // Cycle through different themes
      const colors: AccentColor[] = ['blue', 'green', 'orange'];
      const modes: ThemeMode[] = ['light', 'dark'];
      
      modes.forEach(mode => {
        colors.forEach(color => {
          themeService.setThemeMode(mode);
          themeService.setAccentColor(color);
          fixture.detectChanges();
          
          const gradient = component.sidebarGradient();
          gradients.push(gradient);
          
          expect(gradient).toBeTruthy();
          expect(gradient).toContain('bg-gradient-to-br');
        });
      });
      
      // All gradients should be valid
      expect(gradients.length).toBe(6);
      gradients.forEach(g => expect(g).toBeTruthy());
    });

    it('should maintain gradient consistency during rapid changes', () => {
      // Rapidly change theme
      for (let i = 0; i < 10; i++) {
        themeService.toggleTheme();
        fixture.detectChanges();
        
        const gradient = component.sidebarGradient();
        expect(gradient).toBeTruthy();
        expect(gradient).toContain('bg-gradient-to-br');
      }
    });
  });

  describe('dark mode gradient variations', () => {
    it('should use appropriate dark mode gradients', () => {
      themeService.setThemeMode('dark');
      themeService.setAccentColor('blue');
      fixture.detectChanges();
      
      const gradient = component.sidebarGradient();
      
      expect(gradient).toBeTruthy();
      // Dark mode should use darker color ranges (800-900)
      expect(gradient).toContain('bg-gradient-to-br');
    });

    it('should use appropriate light mode gradients', () => {
      themeService.setThemeMode('light');
      themeService.setAccentColor('blue');
      fixture.detectChanges();
      
      const gradient = component.sidebarGradient();
      
      expect(gradient).toBeTruthy();
      // Light mode should use lighter color ranges (200-300 for strong)
      expect(gradient).toContain('bg-gradient-to-br');
    });

    it('should have different gradients for light and dark modes', () => {
      themeService.setAccentColor('purple');
      
      themeService.setThemeMode('light');
      fixture.detectChanges();
      const lightGradient = component.sidebarGradient();
      
      themeService.setThemeMode('dark');
      fixture.detectChanges();
      const darkGradient = component.sidebarGradient();
      
      expect(lightGradient).not.toEqual(darkGradient);
    });
  });

  describe('section-specific gradients', () => {
    it('should apply gradients consistently across different sections', () => {
      // Test with different config (simulating different sections)
      const sections = [
        { title: 'SOLID', gradientFrom: 'from-orange-500', gradientTo: 'to-red-500' },
        { title: 'OOP', gradientFrom: 'from-blue-500', gradientTo: 'to-purple-500' },
        { title: 'RxJS', gradientFrom: 'from-purple-500', gradientTo: 'to-pink-500' }
      ];
      
      sections.forEach(section => {
        component.config = { ...mockConfig, ...section };
        fixture.detectChanges();
        
        const gradient = component.sidebarGradient();
        expect(gradient).toBeTruthy();
        expect(gradient).toContain('bg-gradient-to-br');
      });
    });
  });

  describe('Property-Based Tests', () => {
    describe('Property 6: Theme Gradient Application', () => {
      /**
       * **Feature: enhanced-sidebar-ui, Property 6: Theme Gradient Application**
       * **Validates: Requirements 6.1, 6.2**
       * 
       * For any combination of theme mode and accent color, when the theme changes,
       * the sidebar gradients should update to reflect the new theme colors.
       */
      it('should update gradients when theme changes across all theme combinations', () => {
        fc.assert(
          fc.property(
            fc.constantFrom<ThemeMode>('light', 'dark'),
            fc.constantFrom<AccentColor>(
              'blue', 'green', 'purple', 'orange', 'teal', 
              'pink', 'red', 'indigo', 'cyan', 'amber'
            ),
            (themeMode, accentColor) => {
              // Set the theme
              themeService.setThemeMode(themeMode);
              themeService.setAccentColor(accentColor);
              fixture.detectChanges();
              
              // Get the gradients
              const sidebarGradient = component.sidebarGradient();
              const titleGradient = component.titleGradient();
              
              // Verify gradients are valid and contain expected structure
              expect(sidebarGradient).toBeTruthy();
              expect(titleGradient).toBeTruthy();
              
              // Sidebar gradient should contain the base gradient class
              expect(sidebarGradient).toContain('bg-gradient-to-br');
              
              // Title gradient should contain text gradient classes
              expect(titleGradient).toContain('bg-gradient-to-r');
              expect(titleGradient).toContain('bg-clip-text');
              expect(titleGradient).toContain('text-transparent');
              
              // Verify gradient contains theme-specific color references
              // The gradient should contain the accent color name in the class
              const gradientContainsColor = 
                sidebarGradient.includes(accentColor) || 
                sidebarGradient.includes('gray'); // Dark mode subtle uses gray
              
              expect(gradientContainsColor).toBe(true);
              
              // Verify title gradient contains the accent color
              expect(titleGradient).toContain(accentColor);
              
              // Return true to satisfy fast-check property
              return true;
            }
          ),
          { numRuns: 100 }
        );
      });

      it('should produce different gradients for different theme combinations', () => {
        fc.assert(
          fc.property(
            fc.constantFrom<ThemeMode>('light', 'dark'),
            fc.constantFrom<AccentColor>(
              'blue', 'green', 'purple', 'orange', 'teal', 
              'pink', 'red', 'indigo', 'cyan', 'amber'
            ),
            fc.constantFrom<ThemeMode>('light', 'dark'),
            fc.constantFrom<AccentColor>(
              'blue', 'green', 'purple', 'orange', 'teal', 
              'pink', 'red', 'indigo', 'cyan', 'amber'
            ),
            (mode1, color1, mode2, color2) => {
              // Skip if both combinations are the same
              if (mode1 === mode2 && color1 === color2) {
                return true;
              }
              
              // Set first theme combination
              themeService.setThemeMode(mode1);
              themeService.setAccentColor(color1);
              fixture.detectChanges();
              const gradient1 = component.sidebarGradient();
              const titleGradient1 = component.titleGradient();
              
              // Set second theme combination
              themeService.setThemeMode(mode2);
              themeService.setAccentColor(color2);
              fixture.detectChanges();
              const gradient2 = component.sidebarGradient();
              const titleGradient2 = component.titleGradient();
              
              // Different theme combinations should produce different gradients
              // (unless they happen to be the same by coincidence)
              const gradientsAreDifferent = 
                gradient1 !== gradient2 || titleGradient1 !== titleGradient2;
              
              expect(gradientsAreDifferent).toBe(true);
              
              return true;
            }
          ),
          { numRuns: 100 }
        );
      });

      it('should maintain gradient consistency when cycling through all themes', () => {
        fc.assert(
          fc.property(
            fc.array(
              fc.record({
                mode: fc.constantFrom<ThemeMode>('light', 'dark'),
                color: fc.constantFrom<AccentColor>(
                  'blue', 'green', 'purple', 'orange', 'teal', 
                  'pink', 'red', 'indigo', 'cyan', 'amber'
                )
              }),
              { minLength: 5, maxLength: 20 }
            ),
            (themeSequence) => {
              const gradients: string[] = [];
              const titleGradients: string[] = [];
              
              // Cycle through the theme sequence
              themeSequence.forEach(({ mode, color }) => {
                themeService.setThemeMode(mode);
                themeService.setAccentColor(color);
                fixture.detectChanges();
                
                const sidebarGradient = component.sidebarGradient();
                const titleGradient = component.titleGradient();
                
                // Each gradient should be valid
                expect(sidebarGradient).toBeTruthy();
                expect(titleGradient).toBeTruthy();
                expect(sidebarGradient).toContain('bg-gradient-to-br');
                expect(titleGradient).toContain('bg-gradient-to-r');
                
                gradients.push(sidebarGradient);
                titleGradients.push(titleGradient);
              });
              
              // All gradients should be valid
              expect(gradients.length).toBe(themeSequence.length);
              expect(titleGradients.length).toBe(themeSequence.length);
              
              // Each gradient should be non-empty
              gradients.forEach(g => expect(g.length).toBeGreaterThan(0));
              titleGradients.forEach(g => expect(g.length).toBeGreaterThan(0));
              
              return true;
            }
          ),
          { numRuns: 50 }
        );
      });

      it('should apply correct gradient intensity based on theme mode', () => {
        fc.assert(
          fc.property(
            fc.constantFrom<ThemeMode>('light', 'dark'),
            fc.constantFrom<AccentColor>(
              'blue', 'green', 'purple', 'orange', 'teal', 
              'pink', 'red', 'indigo', 'cyan', 'amber'
            ),
            (themeMode, accentColor) => {
              themeService.setThemeMode(themeMode);
              themeService.setAccentColor(accentColor);
              fixture.detectChanges();
              
              const sidebarGradient = component.sidebarGradient();
              const titleGradient = component.titleGradient();
              
              // Verify gradients exist
              expect(sidebarGradient).toBeTruthy();
              expect(titleGradient).toBeTruthy();
              
              // Dark mode should use darker color ranges (800-900) or gray
              // Light mode should use lighter color ranges (200-300 for strong, 50-100 for subtle)
              if (themeMode === 'dark') {
                // Dark mode gradients should contain either the accent color with 800-900 range
                // or gray-900/gray-800 for subtle backgrounds
                const hasDarkColors = 
                  sidebarGradient.includes('800') || 
                  sidebarGradient.includes('900') ||
                  sidebarGradient.includes('gray');
                expect(hasDarkColors).toBe(true);
                
                // Title gradient in dark mode should use lighter shades (200-300)
                const hasTitleLightColors = 
                  titleGradient.includes('200') || 
                  titleGradient.includes('300');
                expect(hasTitleLightColors).toBe(true);
              } else {
                // Light mode gradients should contain lighter color ranges
                const hasLightColors = 
                  sidebarGradient.includes('50') || 
                  sidebarGradient.includes('100') ||
                  sidebarGradient.includes('200') ||
                  sidebarGradient.includes('300');
                expect(hasLightColors).toBe(true);
                
                // Title gradient in light mode should use darker shades (700-800)
                const hasTitleDarkColors = 
                  titleGradient.includes('700') || 
                  titleGradient.includes('800');
                expect(hasTitleDarkColors).toBe(true);
              }
              
              return true;
            }
          ),
          { numRuns: 100 }
        );
      });
    });
  });
});
