import { IComponent } from '../../Interfaces/IComponent';
import * as ActivityIndicatorDemoComponent from './Demo/ActivityIndicator';
import * as AppbarDemoComponent from './Demo/Appbar';
import * as AvatarDemoComponent from './Demo/Avatar';
import * as BadgeDemoComponent from './Demo/Badge';
import * as BannerDemoComponent from './Demo/Banner';
import * as BottomNavigationDemoComponent from './Demo/BottomNavigation';
import * as ButtonDemoComponent from './Demo/Button';
import * as CardDemoComponent from './Demo/Card';
import * as CheckboxDemoComponent from './Demo/Checkbox';
import * as ChipDemoComponent from './Demo/Chip';
import * as DataTableDemoComponent from './Demo/DataTable';
import * as DialogDemoComponent from './Demo/Dialog';
import * as DividerDemoComponent from './Demo/Divider';
import * as DrawerDemoComponent from './Demo/Drawer';
import * as FabDemoComponent from './Demo/Fab';
import * as HelperTextDemoComponent from './Demo/HelperText';
import * as IconButtonDemoComponent from './Demo/IconButton';
import * as ListDemoComponent from './Demo/List';
import * as MenuDemoComponent from './Demo/Menu';
import * as ModalDemoComponent from './Demo/Modal';
import * as ProgressBarDemoComponent from './Demo/ProgressBar';
import * as RadioButtonDemoComponent from './Demo/RadioButton';
import * as SearchbarDemoComponent from './Demo/Searchbar';
import * as SnackbarDemoComponent from './Demo/Snackbar';
import * as SurfaceDemoComponent from './Demo/Surface';
import * as SwitchDemoComponent from './Demo/Switch';
import * as TextInputDemoComponent from './Demo/TextInput';
import * as ToggleButtonDemoComponent from './Demo/ToggleButton';
import * as TouchableRippleDemoComponent from './Demo/TouchableRipple';
import * as TypographyDemoComponent from './Demo/Typography';
import * as ActivityIndicatorDemoCode from './Code/ActivityIndicator';
import * as AppbarDemoCode from './Code/Appbar';
import * as AvatarDemoCode from './Code/Avatar';
import * as BadgeDemoCode from './Code/Badge';
import * as BannerDemoCode from './Code/Banner';
import * as BottomNavigationDemoCode from './Code/BottomNavigation';
import * as ButtonDemoCode from './Code/Button';
import * as CardDemoCode from './Code/Card';
import * as CheckboxDemoCode from './Code/Checkbox';
import * as ChipDemoCode from './Code/Chip';
import * as DataTableDemoCode from './Code/DataTable';
import * as DialogDemoCode from './Code/Dialog';
import * as DividerDemoCode from './Code/Divider';
import * as FabDemoCode from './Code/Fab';
import * as HelperTextDemoCode from './Code/HelperText';
import * as IconButtonDemoCode from './Code/IconButton';
import * as ListDemoCode from './Code/List';
import * as MenuDemoCode from './Code/Menu';
import * as ModalDemoCode from './Code/Modal';
import * as ProgressBarDemoCode from './Code/ProgressBar';
import * as RadioButtonDemoCode from './Code/RadioButton';
import * as SearchbarDemoCode from './Code/Searchbar';
import * as SnackbarDemoCode from './Code/Snackbar';
import * as SurfaceDemoCode from './Code/Surface';
import * as SwitchDemoCode from './Code/Switch';
import * as TextInputDemoCode from './Code/TextInput';
import * as ToggleButtonDemoCode from './Code/ToggleButton';
import * as TouchableRippleDemoCode from './Code/TouchableRipple';
import * as TypographyDemoCode from './Code/Typography';

const REPOSITORY_URL: string =
  'https://github.com/hemantv/ReactNativePaperGalleryProject/';
const DOCUMENTATION_BASE_URL: string =
  'https://callstack.github.io/react-native-paper/';
const COMPONENTS: IComponent[] = [
  {
    name: 'ActivityIndicator',
    title: 'Activity Indicator',
    description:
      'Activity indicator is used to present progress of some activity in the app.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/activity-indicator.html`,
    options: [
      {
        name: 'Activity Indicator',
        value: 'default',
        component: ActivityIndicatorDemoComponent.ActivityIndicatorDemo,
        code: ActivityIndicatorDemoCode.ActivityIndicatorCode(),
      },
    ],
  },
  {
    name: 'Appbar',
    title: 'Appbar',
    description:
      'A component to display action items in a bar. It can be placed at the top or bottom.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/appbar.html`,
    options: [
      {
        name: 'Appbar',
        value: 'default',
        component: AppbarDemoComponent.AppbarDemo,
        code: AppbarDemoCode.AppbarCode(),
      },
    ],
  },
  {
    name: 'Avatar',
    title: 'Avatar',
    description: 'Avatars can be used to represent people in a graphical way.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/avatar-icon.html`,
    options: [
      {
        name: 'Icon Avatar',
        value: 'icon',
        component: AvatarDemoComponent.IconAvatarDemo,
        code: AvatarDemoCode.IconAvatarCode(),
      },
      {
        name: 'Text Avatar',
        value: 'text',
        component: AvatarDemoComponent.TextAvatarDemo,
        code: AvatarDemoCode.TextAvatarCode(),
      },
      {
        name: 'Image Avatar',
        value: 'image',
        component: AvatarDemoComponent.ImageAvatarDemo,
        code: AvatarDemoCode.ImageAvatarCode(),
      },
    ],
  },
  {
    name: 'Badge',
    title: 'Badge',
    description:
      'Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/badge.html`,
    options: [
      {
        name: 'Badge',
        value: 'default',
        component: BadgeDemoComponent.BadgeDemo,
        code: BadgeDemoCode.BadgeCode(),
      },
    ],
  },
  {
    name: 'Banner',
    title: 'Banner',
    description: 'Banner displays a prominent message and related actions.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/banner.html`,
    options: [
      {
        name: 'Banner',
        value: 'default',
        component: BannerDemoComponent.BannerDemo,
        code: BannerDemoCode.BannerCode(),
      },
    ],
  },
  {
    name: 'BottomNavigation',
    title: 'Bottom Navigation',
    description:
      'Bottom navigation provides quick navigation between top-level views of an app with a bottom navigation bar. It is primarily designed for use on mobile.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/bottom-navigation.html`,
    options: [
      {
        name: 'Bottom Navigation',
        value: 'default',
        component: BottomNavigationDemoComponent.BottomNavigationDemo,
        code: BottomNavigationDemoCode.BottomNavigationCode(),
      },
      {
        name: 'Icon Bottom Navigation',
        value: 'icon',
        component: BottomNavigationDemoComponent.IconBottomNavigationDemo,
        code: BottomNavigationDemoCode.IconBottomNavigationCode(),
      },
      {
        name: 'Shifting Bottom Navigation',
        value: 'shifting',
        component: BottomNavigationDemoComponent.ShiftingBottomNavigationDemo,
        code: BottomNavigationDemoCode.ShiftingIconBottomNavigationCode(),
      },
    ],
  },
  {
    name: 'Button',
    title: 'Button',
    description:
      'A button is component that the user can press to trigger an action.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/button.html`,
    options: [
      {
        name: 'Text Button',
        value: 'text',
        component: ButtonDemoComponent.TextButtonDemo,
        code: ButtonDemoCode.TextButtonCode(),
      },
      {
        name: 'Outlined Button',
        value: 'outlined',
        component: ButtonDemoComponent.OutlinedButtonDemo,
        code: ButtonDemoCode.OutlinedButtonCode(),
      },
      {
        name: 'Contained Button',
        value: 'contained',
        component: ButtonDemoComponent.ContainedButtonDemo,
        code: ButtonDemoCode.ContainedButtonCode(),
      },
    ],
  },
  {
    name: 'Card',
    title: 'Card',
    description:
      'A card is a sheet of material that serves as an entry point to more detailed information.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/card.html`,
    options: [
      {
        name: 'Basic Card',
        value: 'basic',
        component: CardDemoComponent.BasicCardDemo,
        code: CardDemoCode.BasicCardCode(),
      },
      {
        name: 'Card Headers',
        value: 'headers',
        component: CardDemoComponent.CardHeadersDemo,
        code: CardDemoCode.CardHeadersCode(),
      },
      {
        name: 'Card Cover',
        value: 'cover',
        component: CardDemoComponent.CardCoverDemo,
        code: CardDemoCode.CardCoverCode(),
      },
      {
        name: 'Card Actions',
        value: 'actions',
        component: CardDemoComponent.CardActionsDemo,
        code: CardDemoCode.CardActionsCode(),
      },
    ],
  },
  {
    name: 'Checkbox',
    title: 'Checkbox',
    description:
      'Checkboxes allow the selection of multiple options from a set.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/checkbox.html`,
    options: [
      {
        name: 'Checkbox',
        value: 'default',
        component: CheckboxDemoComponent.CheckboxDemo,
        code: CheckboxDemoCode.CheckboxCode(),
      },
    ],
  },
  {
    name: 'Chip',
    title: 'Chip',
    description: 'Chips can be used to display entities in small blocks.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/chip.html`,
    options: [
      {
        name: 'Flat Chip',
        value: 'flat',
        component: ChipDemoComponent.FlatChipDemo,
        code: ChipDemoCode.FlatChipCode(),
      },
      {
        name: 'Outlined Chip',
        value: 'outlined',
        component: ChipDemoComponent.OutlinedChipDemo,
        code: ChipDemoCode.OutlinedChipCode(),
      },
    ],
  },
  {
    name: 'DataTable',
    title: 'Data Table',
    description: 'Data tables allow displaying sets of data.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/data-table.html`,
    options: [
      {
        name: 'Data Table',
        value: 'default',
        component: DataTableDemoComponent.DataTableDemo,
        code: DataTableDemoCode.DataTableCode(),
      },
    ],
  },
  {
    name: 'Dialog',
    title: 'Dialog',
    description:
      'Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/dialog.html`,
    options: [
      {
        name: 'Basic Dialog',
        value: 'basic',
        component: DialogDemoComponent.BasicDialogDemo,
        code: DialogDemoCode.BasicDialogCode(),
      },
      {
        name: 'Input Dialog',
        value: 'input',
        component: DialogDemoComponent.InputDialogDemo,
        code: DialogDemoCode.InputDialogCode(),
      },
      {
        name: 'Confirmation Dialog',
        value: 'confirmation',
        component: DialogDemoComponent.ConfirmationDialogDemo,
        code: DialogDemoCode.ConfirmationDialogCode(),
      },
      {
        name: 'Radio Dialog',
        value: 'radio',
        component: DialogDemoComponent.RadioDialogDemo,
        code: DialogDemoCode.RadioDialogCode(),
      },
      {
        name: 'Checkbox Dialog',
        value: 'checkbox',
        component: DialogDemoComponent.CheckboxDialogDemo,
        code: DialogDemoCode.CheckboxDialogCode(),
      },
    ],
  },
  {
    name: 'Divider',
    title: 'Divider',
    description:
      'A divider is a thin, lightweight separator that groups content in lists and page layouts.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/divider.html`,
    options: [
      {
        name: 'Divider',
        value: 'default',
        component: DividerDemoComponent.DividerDemo,
        code: DividerDemoCode.DividerCode(),
      },
    ],
  },
  {
    name: 'Drawer',
    title: 'Drawer',
    description:
      'A component used to show an action item with an icon and a label in a navigation drawer.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/drawer-item.html`,
    options: [
      {
        name: 'Drawer',
        value: 'default',
        component: DrawerDemoComponent.DrawerDemo,
        code: DividerDemoCode.DividerCode(),
      },
    ],
  }, {
    name: 'Fab',
    title: 'Fab',
    description:
      'A floating action button represents the primary action in an application.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/fab.html`,
    options: [
      {
        name: 'Fab',
        value: 'default',
        component: FabDemoComponent.FabDemo,
        code: FabDemoCode.FabCode(),
      },
      {
        name: 'Fab Group',
        value: 'group',
        component: FabDemoComponent.FabGroupDemo,
        code: FabDemoCode.FabGroupCode(),
      },
    ],
  },
  {
    name: 'HelperText',
    title: 'Helper Text',
    description:
      'Helper text is used in conjuction with input elements to provide additional hints for the user.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/helper-text.html`,
    options: [
      {
        name: 'Helper Text',
        value: 'default',
        component: HelperTextDemoComponent.HelperTextDemo,
        code: HelperTextDemoCode.HelperTextCode(),
      },
    ],
  },
  {
    name: 'IconButton',
    title: 'Icon Button',
    description:
      'An icon button is a button which displays only an icon without a label.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/icon-button.html`,
    options: [
      {
        name: 'Icon Button',
        value: 'default',
        component: IconButtonDemoComponent.IconButtonDemo,
        code: IconButtonDemoCode.IconButtonCode(),
      },
    ],
  },
  {
    name: 'List',
    title: 'List',
    description:
      'Lists are used to display rows of information, such as a contact list, playlist, or menu.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/list-accordion.html`,
    options: [
      {
        name: 'Basic List',
        value: 'basic',
        component: ListDemoComponent.BasicListDemo,
        code: ListDemoCode.BasicListCode(),
      },
      {
        name: 'Section List',
        value: 'section',
        component: ListDemoComponent.SectionListDemo,
        code: ListDemoCode.SectionListCode(),
      },
      {
        name: 'Accordion List',
        value: 'accordion',
        component: ListDemoComponent.AccordionListDemo,
        code: ListDemoCode.AccordionListCode(),
      },
      {
        name: 'Accordion Group List',
        value: 'accordiongroup',
        component: ListDemoComponent.AccordionGroupListDemo,
        code: ListDemoCode.AccordionGroupListCode(),
      },
    ],
  },
  {
    name: 'Menu',
    title: 'Menu',
    description:
      'Menus display a list of choices on temporary elevated surfaces. Their placement varies based on the element that opens them.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/menu.html`,
    options: [
      {
        name: 'Menu',
        value: 'default',
        component: MenuDemoComponent.MenuDemo,
        code: MenuDemoCode.MenuCode(),
      },
    ],
  },
  {
    name: 'Modal',
    title: 'Modal',
    description:
      'The Modal component is a simple way to present content above an enclosing view.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/modal.html`,
    options: [
      {
        name: 'Modal',
        value: 'default',
        component: ModalDemoComponent.ModalDemo,
        code: ModalDemoCode.ModalCode(),
      },
    ],
  },
  {
    name: 'ProgressBar',
    title: 'Progress Bar',
    description:
      'Progress bar is an indicator used to present progress of some activity in the app.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/progress-bar.html`,
    options: [
      {
        name: 'Progress Bar',
        value: 'default',
        component: ProgressBarDemoComponent.ProgressBarDemo,
        code: ProgressBarDemoCode.ProgressBarCode(),
      },
      {
        name: 'Indeterminate Progress Bar',
        value: 'indeterminate',
        component: ProgressBarDemoComponent.IndeterminateProgressBarDemo,
        code: ProgressBarDemoCode.IndeterminateProgressBarCode(),
      },
    ],
  },
  {
    name: 'RadioButton',
    title: 'Radio Button',
    description:
      'Radio buttons allow the selection a single option from a set.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/radio-button.html`,
    options: [
      {
        name: 'Radio Button',
        value: 'default',
        component: RadioButtonDemoComponent.RadioButtonDemo,
        code: RadioButtonDemoCode.RadioButtonCode(),
      },
    ],
  },
  {
    name: 'Searchbar',
    title: 'Searchbar',
    description:
      'Searchbar is a simple input box where users can type search queries.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/searchbar.html`,
    options: [
      {
        name: 'Searchbar',
        value: 'default',
        component: SearchbarDemoComponent.SearchbarDemo,
        code: SearchbarDemoCode.SearchbarCode(),
      },
    ],
  },
  {
    name: 'Snackbar',
    title: 'Snackbar',
    description:
      'Snackbars provide brief feedback about an operation through a message at the bottom of the screen. Snackbar by default uses onSurface color from theme.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/snackbar.html`,
    options: [
      {
        name: 'Snackbar',
        value: 'default',
        component: SnackbarDemoComponent.SnackbarDemo,
        code: SnackbarDemoCode.SnackbarCode(),
      },
    ],
  },
  {
    name: 'Surface',
    title: 'Surface',
    description:
      'Surface is a basic container that can give depth to an element with elevation shadow.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/surface.html`,
    options: [
      {
        name: 'Surface',
        value: 'default',
        component: SurfaceDemoComponent.SurfaceDemo,
        code: SurfaceDemoCode.SurfaceCode(),
      },
    ],
  },
  {
    name: 'Switch',
    title: 'Switch',
    description:
      'Switch is a visual toggle between two mutually exclusive states — on and off.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/switch.html`,
    options: [
      {
        name: 'Switch',
        value: 'default',
        component: SwitchDemoComponent.SwitchDemo,
        code: SwitchDemoCode.SwitchCode(),
      },
    ],
  },
  {
    name: 'TextInput',
    title: 'TextInput',
    description: 'A component to allow users to input text.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/text-input.html`,
    options: [
      {
        name: 'Text Input',
        value: 'input',
        component: TextInputDemoComponent.TextInputDemo,
        code: TextInputDemoCode.TextInputCode(),
      },
    ],
  },
  {
    name: 'ToggleButton',
    title: 'Toggle Button',
    description:
      'Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/toggle-button.html`,
    options: [
      {
        name: 'Toggle Button',
        value: 'default',
        component: ToggleButtonDemoComponent.ToggleButtonDemo,
        code: ToggleButtonDemoCode.ToggleButtonCode(),
      },
      {
        name: 'Group Toggle Button',
        value: 'group',
        component: ToggleButtonDemoComponent.GroupToggleButtonDemo,
        code: ToggleButtonDemoCode.GroupToggleButtonCode(),
      },
      {
        name: 'Row Toggle Button',
        value: 'row',
        component: ToggleButtonDemoComponent.RowToggleButtonDemo,
        code: ToggleButtonDemoCode.RowToggleButtonCode(),
      },
    ],
  },
  {
    name: 'TouchableRipple',
    title: 'Touchable Ripple',
    description:
      'A wrapper for views that should respond to touches. Provides a material "ink ripple" interaction effect for supported platforms (>= Android Lollipop). On unsupported platforms, it falls back to a highlight effect.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/touchable-ripple.html`,
    options: [
      {
        name: 'Touchable Ripple',
        value: 'default',
        component: TouchableRippleDemoComponent.TouchableRippleDemo,
        code: TouchableRippleDemoCode.TouchableRippleCode(),
      },
    ],
  },
  {
    name: 'Typography',
    title: 'Typography',
    description: 'Definitions for the various typographical styles.',
    documentationUrl: `${DOCUMENTATION_BASE_URL}/text.html`,
    options: [
      {
        name: 'Typography',
        value: 'default',
        component: TypographyDemoComponent.TypographyDemo,
        code: TypographyDemoCode.TypographyCode(),
      },
    ],
  },
];

const COMPONENT_MAP: Map<string, IComponent> = new Map<string, IComponent>(
  COMPONENTS.map(
    (component) => [component.name, component] as [string, IComponent],
  ),
);

const getComponents = () => COMPONENTS;

const getComponent = (name: string): IComponent => {
  const component = COMPONENT_MAP.get(name);
  if (!component) {
    throw new Error('Invalid component requested');
  }
  return component;
};

const getDocumentationUrl = () => DOCUMENTATION_BASE_URL;

const getRepositoryUrl = () => REPOSITORY_URL;

export { getComponent, getComponents, getDocumentationUrl, getRepositoryUrl };
