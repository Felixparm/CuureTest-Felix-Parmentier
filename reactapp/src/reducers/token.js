export default function(token='',action) {
  
    if(action.type == 'informationFromSignInUp') {

        console.log('Token from reducer from SignInUp',action.token);
        return action.token;
    }
    // if(action.type == 'informationFromSellScreen') {

    //     var newToken =action.token;
    //     console.log('Token from reducer from SellScreen',newToken);
    //     return newToken;

    // }
    // if(action.type == 'informationFromSignIn') {

    //     var newToken =action.token;
    //     console.log('Token from reducer from SignIn',newToken);
    //     return newToken;
    // }
    // if(action.type == 'informationFromLogOut') {

    //     var newToken ='';
    //     console.log('Token from reducer',newToken);
    //     return newToken;
    // }
     else 
     {    
        return token; 
    }
    
  }

