import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({

    appContainer: {
        flex: 1
    },

    whiteBackground: {
        backgroundColor: "#ffffff"
    },

    appTitle: {
        fontSize: 18,
        color: "#000000",
        textAlign: Platform.OS === "ios" ? "center" : "left",

    },

    noBorderToolbar: {
        elevation: 0,
        marginVertical: Platform.OS === "ios" ? 16 : 0
    },

    textInputContainer: {
        paddingHorizontal: 16,
        marginTop: 32
    },

    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },

    linkButtonContainer: {
        paddingHorizontal: 8
    },

    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },

    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 5,
        paddingTop: 12,
        fontSize: 18
    },

    buttonStyle: {
        padding: 14,
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "center"
    },

    buttonTitle: {
        color: "#ffffff",
        fontSize: 16
    },

    fontSize16: {
        fontSize: 16
    },

    colorBlack: {
        color: "rgb(51, 51, 51)"
    },

    loginFooterTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 16
    },

    loginButtonCont: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },

    loginHelperCont: {
        paddingHorizontal: 16,
        paddingVertical: 32,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    loginLogoContainer: {
        justifyContent: "center",
        flexDirection: "row"
    },

    loginFormCont: {
        justifyContent:"space-evenly",
        flex: 1
    },

    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 16,
        zIndex: 1
    },

    toolbarContainer: {
        height: 56,
        backgroundColor: "#ffffff",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        elevation: 6
    },

    toolbarUtils: {
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8,
        justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
    },

    leftIconContainer: {
        justifyContent: "space-around",
        padding: 16,
        position: Platform.OS === "ios" ? "absolute" : "relative",
        left: Platform.OS === "ios" ? 0 : 0
    },

    paragraphOne: {
        paddingHorizontal: 16,
        paddingTop: 16,
        fontSize: 16,
        color: "#000000",
        lineHeight: 22
    },

    dateOverlay: {
        width: "100%",
        height: 70,
        position: "absolute",
        top: 0,
        zIndex: 1
    },

    checkboxContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    checkboxText: {
        fontSize: 16,
        color: "#000000"
    },

    listPickerContainer: {
        flex: 3,
    },

    listPickerStyle: {
        width: 150,
        flex: 2,
        color: "rgb(15, 113, 184)"
    },

    countryImage:{
        marginTop: 5,
    },

    checkboxStyle: {
        paddingVertical: 16,
    },

    subscribeStyle: {
        flexDirection: "row",
        paddingHorizontal: 16
    },

    checkboxAgree: {
        flexDirection: "row",
        overflow: "hidden",
        flex: 1,
        paddingLeft: 16,
        paddingRight: 32
    },

    checkboxPrivacy : {
        flexDirection: 'row',
        overflow: 'hidden',
        flex: 1,
        paddingLeft: 16,
        paddingRight: 32
    },

    errorText: {
        color:'red',
        paddingHorizontal :16
    },

    menubar: {
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        marginHorizontal: 16
    },
    menuIcon:{
      backgroundColor:'#00F'
    },

    //sidebar
    sidebarContainer: {
        flex: 1,
    },
    sidebarIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#cccccc",
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    sidebarIconImage: {
        width: 25,
        height: 25
    },

    listViewCont: {
        justifyContent: "center",
        paddingHorizontal: 16
    },
    listViewContainer: {
        width: "100%",
        paddingHorizontal: 16,
        paddingTop: 16
    },
    listViewWrapper: {
        width: "100%"
    },

   menifestContainer: {
        flexDirection: "row",
        // backgroundColor: "#e4e4e4",
        alignItems: "center",
        padding: 8
    },
    settingContainer: {
          backgroundColor:'#FFF',
           flex:1
      },
      settingListContainer:{
         flex:1,
         flexDirection: 'row',
         borderBottomColor:'rgb(200, 199, 204)',
         borderBottomWidth:1,
         marginHorizontal:16,
         paddingVertical: 8
      },
      settingTitleView:{
        flex:8,
        justifyContent:'center',
        textAlign:'center',
        color:'rgb(0, 0, 0)'
      },
      leftIconView:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5
      },
      settingIcons:{
          width:25,
          height:25,
      },

      preferredStationContainer: {
          backgroundColor:'#FFF',
           flex:1,
           paddingBottom:-5,
      },
      PreferredStationTitleView:{
          flex:0.5,
          borderBottomColor:'rgb(200, 199, 204)',
          borderBottomWidth:1,
          marginTop:10,

      },
      preferredStationText:{
          color:'rgb(142, 142, 147)',
          paddingLeft:10,
          fontSize:12,

      },
      stationList:{
          flex:9.5
      },
      ListContainer:{
          flex:1,
          flexDirection: 'row',
          borderBottomColor:'rgb(200, 199, 204)',
          borderBottomWidth:1,
          marginHorizontal:16,
          paddingBottom: 10,
          paddingTop: 2
      },
      preferredStationView:{
          flex:9,
          flexDirection:'column'
      },
      rightIconView:{
          flex:1,
          justifyContent:'flex-end',
          alignItems:'flex-end',
          //marginLeft:-10,
          //backgroundColor:'red',
          paddingTop:5,
          paddingBottom:5
      },
      stationNameText:{
          color:'rgb(51, 51, 51)',
          fontSize:15,
          paddingTop:5,
      },
      addressText:{
         fontSize:10,
         color:'rgb(123, 122, 118)'
      },
      stausText:{
          color:'rgb(15, 113, 184)',
          fontSize:12,
      },
      hourText:{
          fontSize:13,
          color:'rgb(51, 51, 51)',
          paddingTop:5,
          paddingBottom:5
      },
      distanceText:{
          fontSize:12,
          color:'rgb(51, 51, 51)',
          textAlign:'right'
      },
      statusAndDistanceView:{
          flexDirection:'row',
          flex:1
      },
      storeStatusView:{
          flex:1,
          justifyContent:'flex-start'
      },
      storeDistance:{
          flex:1,
          justifyContent:'flex-end'
      },
      //Edit Profile
      profilePic: {
          flex: 3,
          flexDirection:'row',
          backgroundColor: "#f5f5f5",
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom:20,
        },
        profilePicImage:{

         height:120,
          width:120,
          borderRadius: 500/2,
          overflow: 'hidden'
        },
        profileContainer: {
          flex: 6,
        },
        submitButton: {
          marginTop: 20,
        },

      supportContainer: {
          backgroundColor:'#FFF',
           flex:1,
      },
      supportView:{
          borderBottomColor:'rgb(200, 199, 204)',
          borderBottomWidth:1,
          paddingTop:5,
          marginTop:10
      },
      emailSupportDetailView:{
          flexDirection:'row',
          borderBottomWidth:1,
          borderBottomColor:'rgb(200, 199, 204)',
          paddingLeft:5
      },
      supportleftIconView:{
          justifyContent:'flex-start',
      },
      contactView:{
          flex:1,
          justifyContent:'flex-start',
          paddingTop:1,

      },
      SupportTitleText:{
          color:'rgb(142, 142, 147)',
          paddingLeft:10
      },
      preferredStationDetails:{
          color:'rgb(15, 113, 184)',
          textDecorationLine: 'underline',
          paddingLeft:5
      },
      // Privacy Policy
      PrivacytContainer:{
          backgroundColor:'#FFF',
          flex:1,
     },
     //newsletter
      newsLetterContainer:{
          backgroundColor:'#FFF',
          flex:1,

      },
      newsletterView:{
          flexDirection: 'row',
          borderBottomColor:'rgb(200, 199, 204)',
          borderBottomWidth:1,
          marginLeft:10,
          marginRight:10,

      },
      newsLetterTitleView:{
          flex:9,
          justifyContent:'flex-start',
          textAlign:'center',
          paddingTop:5,
          paddingBottom:5
      },
      newsLetterTitleText:{
          color:'rgb(0, 0, 0)',
          fontSize:15,
      },
      notificationRightIconView:{
          flex:1,
          justifyContent:'flex-start',
          paddingTop:5,
          paddingBottom:5,
      },
      newsLetterContentText:{
          fontSize:12,
          color:'rgb(51, 51, 51)',
          padding:10
      },

     notificationContainer:{
          backgroundColor:'#FFF',
          flex:1,
      },
      mapContainer: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#F5FCFF',
      },
      map: {
            flex: 1,
      },

      notificationView:{
          flexDirection: 'row',
          borderBottomColor:'rgb(200, 199, 204)',
          borderBottomWidth:1,
          borderTopColor:'rgb(200, 199, 204)',
          borderTopWidth:1,
      },
      notificationTitleView:{
          flex:9,
          justifyContent:'flex-start',
          textAlign:'center',
          color:'rgb(0, 0, 0)',
          paddingTop:5,
          paddingBottom:5,
      },
      notificationTitleText:{
          color:'rgb(0, 0, 0)',
          fontSize:15,
          paddingLeft:6
      },
      notificaitonRightIconView:{
          flex:1,
          justifyContent:'flex-start',
          paddingTop:5,
          paddingBottom:5
      },
      notificationContentText:{
          fontSize:12,
          color:'rgb(51, 51, 51)',
          paddingLeft:5
      },

      inputView: {
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'absolute',
            top: 15,
            left: 10,
            right: 10
      },
      //Terms and condition

      TermsAndConditionsTextView:{
          marginLeft:15,
          marginRight:15,
       },
       headerText:{
           paddingBottom:10,
           paddingTop:10,
           color:'rgb(15, 113, 184)',
           fontSize:14,

       },
       logoutView:{
          marginRight:15
        },
        logoutText:{
            color:'rgb(15, 113, 184)',
            fontSize:14,
        },
        mainView: {
            flex: 1,
            padding: 70,
            alignItems: 'center',
            justifyContent:'center',
        },

        loyalabilityplusDesign: {
            color: "rgb(15, 113, 184)",
            fontSize: 100,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },

        loyalabilityText: {
            color: 'black',
            fontSize: 16,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingRight: 20,
            paddingLeft:20,
            marginTop:1,
        },
});

export default styles;
