package com.findmentor;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Imported for Splash Screen
import android.os.Bundle; // Imported for Splash Screen

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "FindMentor";
  }
  /* For Splash Screen */
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }
}
