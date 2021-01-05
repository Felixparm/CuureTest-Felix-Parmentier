export default function(token='',action) {
  
    if(action.type == 'informationFromSignInUp') {

        console.log('Token from reducer from SignInUp',action.token);
        return action.token;
    }

     else 
     {    
        return token; 
    }
    
  }

