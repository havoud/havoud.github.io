var inc=0;
function myFunc(){
    window.open('https://www.credly.com/badges/46ebb039-945a-43c1-b774-7fb083b01882/linked_in_profile','AWS Certified Cloud Practitioner','width=600,height=400')
    inc=inc+1;
    alert(inc);
}

function architect(){
    window.open('https://www.linkedin.com/learning/certificates/024f93172e394f0d18a6209c8da2f1918314f96fcdd7100ea6d09cf79a3f8d58?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bj4u0D6ICTrOvJTv%2FuEP1ug%3D%3D&accountId=92408722&u=92408722&success=true&authUUID=Ncv9ATQ9RUmeGHmUQ7YAlQ%3D%3D','AWS Certified Solutions Architect Associate','width=600,height=400')
}

function google(){
    window.open('https://www.credly.com/badges/f0e5f245-04eb-4519-8634-a6d8c9edbfa8?source=linked_in_profile','AWS Certified Cloud Practitioner','width=600,height=400')
}
function tableau(){
    window.open('https://www.coursera.org/account/accomplishments/specialization/certificate/G7ZLY6KQT9UY','AWS Certified Cloud Practitioner','width=600,height=400')
}
function sql(){
    window.open('https://www.coursera.org/account/accomplishments/certificate/B2HR83F2YLTR','AWS Certified Cloud Practitioner','width=600,height=400')
}

/*  window.addEventListener("resize", handleResizeEvent) */

window.addEventListener( "resize", handleResizeEvent );
// Listen for Media Query "change" events.
setupMediaQueryListeners();

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// I handle window resize events.
function handleResizeEvent( event ) {

    console.group( "%cResize Event", "color: red" );
    console.log( "Window width:", window.innerWidth );
    console.log( "Pixel density:", window.devicePixelRatio );
    // NOTE: Safari seems to report the devicePixelRatio as "1" (on my laptop)
    // regardless of what the Zoom is doing. Chrome and Firefox, on the other
    // hand, seem to show an increased pixel density as the Zoom increases.
    console.groupEnd();

}

// I handle media-query change events.
function handleMediaQueryChangeEvent( event ) {

    console.group( "%cMediaQueryList Event", "color: purple" );
    console.log( "Condition:", event.media );
    console.log( "Matches:", event.matches );
    console.groupEnd();

}

// --------------------------------------------------------------------------- //
// --------------------------------------------------------------------------- //

// I look through the document StyleSheet and setup watchers for any Media Rule
// in the CSS rule list.
function setupMediaQueryListeners() {

    var rules = document.styleSheets[ 0 ].cssRules;
    var length = rules.length;

    for ( var i = 0 ; i < length ; i++ ) {

        var rule = rules[ i ];
        var conditionText = ( rule.media && rule.media[ 0 ] );

        // If this isn't a CSS Media Rule, skip it.
        if ( ! conditionText ) {

            continue;

        }

        // Create a watcher for the given CSS Media Rule condition. The condition
        // text will be something like, "screen and (min-width: 900px)". The
        // resultant object allows us to listen for "change" events on that
        // condition relative to the state of the document.
        var mediaQueryList = window.matchMedia( conditionText );

        // CAUTION: You can also use .addEventListener(change); however, that
        // method does not appear to work for Safari. Classic Safari!
        mediaQueryList.addListener( handleMediaQueryChangeEvent );

        // In addition to listening for changes on the media query, we can also
        // check to see if the initial state of the media query matches the
        // current document state.
        console.group( "Setting up media listener" );
        console.log( "Condition:", conditionText );
        console.log( "Initial match:", mediaQueryList.matches );
        console.groupEnd();

    }

}
