import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideIcons } from "@ng-icons/core";
import { 
  faSolidAlignJustify, faSolidArrowDown, faSolidArrowLeft, faSolidArrowPointer, faSolidArrowRight, faSolidArrowRightArrowLeft, faSolidArrowUp, faSolidArrowUpRightFromSquare, faSolidArrowsLeftRight, faSolidArrowsUpDown, faSolidBan, faSolidBars, faSolidBarsStaggered, faSolidBell, faSolidBolt, faSolidBook, faSolidBookOpen, faSolidBox, faSolidBoxOpen, faSolidBullhorn, faSolidCalculator, faSolidCalendar, faSolidCar, faSolidCarSide, faSolidCheck, faSolidCheckDouble, faSolidChevronDown, faSolidChevronLeft, faSolidChevronRight, faSolidCircle, faSolidCircleCheck, faSolidCircleInfo, faSolidCirclePlay, faSolidCirclePlus, faSolidCircleQuestion, faSolidCircleUser, faSolidCircleXmark, faSolidClock, faSolidCode, faSolidCodeBranch, faSolidComment, faSolidComments, faSolidCopy, faSolidCreditCard, faSolidCube, faSolidDatabase, faSolidDiagramProject, faSolidDollarSign, faSolidDoorOpen, faSolidDownload, faSolidEllipsis, faSolidEllipsisVertical, faSolidEnvelope, faSolidExpand, faSolidEye, faSolidEyeSlash, faSolidFileLines, faSolidFileSignature, faSolidFilter, faSolidFloppyDisk, faSolidFont, faSolidGauge, faSolidGear, faSolidGears, faSolidGhost, faSolidGlobe, faSolidGraduationCap, faSolidHashtag, faSolidIdCard, faSolidInbox, faSolidIndustry, faSolidKeyboard, faSolidLaptopCode, faSolidLayerGroup, faSolidLightbulb, faSolidLink, faSolidLinkSlash, faSolidList, faSolidListCheck, faSolidListOl, faSolidListUl, faSolidLock, faSolidMagnifyingGlass, faSolidMap, faSolidMinus, faSolidMoneyBill, faSolidMoon, faSolidObjectGroup, faSolidPalette, faSolidPaperPlane, faSolidPaw, faSolidPenToSquare, faSolidPencil, faSolidPlay, faSolidPlug, faSolidPlus, faSolidPuzzlePiece, faSolidQuestion, faSolidReceipt, faSolidRocket, faSolidRotate, faSolidRoute, faSolidRulerHorizontal, faSolidRulerVertical, faSolidScissors, faSolidServer, faSolidShapes, faSolidShareNodes, faSolidShieldHalved, faSolidSignal, faSolidSignature, faSolidSitemap, faSolidSliders, faSolidSpinner, faSolidSquare, faSolidSquareCheck, faSolidSquareRootVariable, faSolidStar, faSolidStop, faSolidSun, faSolidSwatchbook, faSolidTable, faSolidTableColumns, faSolidTableList, faSolidTag, faSolidToggleOn, faSolidTowerBroadcast, faSolidTrash, faSolidTriangleExclamation, faSolidUnlock, faSolidUpload, faSolidUser, faSolidUserPen, faSolidUserPlus, faSolidUserShield, faSolidUserSlash, faSolidUsers, faSolidVideo, faSolidWallet, faSolidWandMagicSparkles, faSolidWaveSquare, faSolidWeightHanging, faSolidWindowMaximize, faSolidWindowRestore, faSolidWrench, faSolidXmark 
} from "@ng-icons/font-awesome/solid";
import { faBrandAngular, faBrandGithub } from "@ng-icons/font-awesome/brands";


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark'
        }
      }
    }),
    provideIcons({ 
      faBrandAngular, faBrandGithub, faSolidAlignJustify, faSolidArrowDown, faSolidArrowLeft, faSolidArrowPointer, faSolidArrowRight, faSolidArrowRightArrowLeft, faSolidArrowsLeftRight, faSolidArrowsUpDown, faSolidArrowUp, faSolidArrowUpRightFromSquare, faSolidBan, faSolidBars, faSolidBarsStaggered, faSolidBell, faSolidBolt, faSolidBook, faSolidBookOpen, faSolidBox, faSolidBoxOpen, faSolidBullhorn, faSolidCalculator, faSolidCalendar, faSolidCar, faSolidCarSide, faSolidCheck, faSolidCheckDouble, faSolidChevronDown, faSolidChevronLeft, faSolidChevronRight, faSolidCircle, faSolidCircleCheck, faSolidCircleInfo, faSolidCirclePlay, faSolidCirclePlus, faSolidCircleQuestion, faSolidCircleUser, faSolidCircleXmark, faSolidClock, faSolidCode, faSolidCodeBranch, faSolidComment, faSolidComments, faSolidCopy, faSolidCreditCard, faSolidCube, faSolidDatabase, faSolidDiagramProject, faSolidDollarSign, faSolidDoorOpen, faSolidDownload, faSolidEllipsis, faSolidEllipsisVertical, faSolidEnvelope, faSolidExpand, faSolidEye, faSolidEyeSlash, faSolidFileLines, faSolidFileSignature, faSolidFilter, faSolidFloppyDisk, faSolidFont, faSolidGauge, faSolidGear, faSolidGears, faSolidGhost, faSolidGlobe, faSolidGraduationCap, faSolidHashtag, faSolidIdCard, faSolidInbox, faSolidIndustry, faSolidKeyboard, faSolidLaptopCode, faSolidLayerGroup, faSolidLightbulb, faSolidLink, faSolidLinkSlash, faSolidList, faSolidListCheck, faSolidListOl, faSolidListUl, faSolidLock, faSolidMagnifyingGlass, faSolidMap, faSolidMinus, faSolidMoneyBill, faSolidMoon, faSolidObjectGroup, faSolidPalette, faSolidPaperPlane, faSolidPaw, faSolidPencil, faSolidPenToSquare, faSolidPlay, faSolidPlug, faSolidPlus, faSolidPuzzlePiece, faSolidQuestion, faSolidReceipt, faSolidRocket, faSolidRotate, faSolidRoute, faSolidRulerHorizontal, faSolidRulerVertical, faSolidScissors, faSolidServer, faSolidShapes, faSolidShareNodes, faSolidShieldHalved, faSolidSignal, faSolidSignature, faSolidSitemap, faSolidSliders, faSolidSpinner, faSolidSquare, faSolidSquareCheck, faSolidSquareRootVariable, faSolidStar, faSolidStop, faSolidSun, faSolidSwatchbook, faSolidTable, faSolidTableColumns, faSolidTableList, faSolidTag, faSolidToggleOn, faSolidTowerBroadcast, faSolidTrash, faSolidTriangleExclamation, faSolidUnlock, faSolidUpload, faSolidUser, faSolidUserPen, faSolidUserPlus, faSolidUsers, faSolidUserShield, faSolidUserSlash, faSolidVideo, faSolidWallet, faSolidWandMagicSparkles, faSolidWaveSquare, faSolidWeightHanging, faSolidWindowMaximize, faSolidWindowRestore, faSolidWrench, faSolidXmark 
    })
  ]
};
