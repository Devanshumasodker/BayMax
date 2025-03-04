// we create this for the smoothe navigation and to avoid the error of navigationRef.current.navigate is not a function
// we use this to navigate to the screen from anywhere in the app

import { CommonActions,
  createNavigationContainerRef,
  StackActions 

} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
export async function navigate(routeName: string, params?: object) {

  navigationRef.isReady()
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}
export async function resetAndNavigate(routeName: string) {

  navigationRef.isReady()
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    }));
  }
}

