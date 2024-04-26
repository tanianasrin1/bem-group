export const emailValidator = (email) => {
  if(email?.length === 0){
    return 'Email is required.'
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return 'Invalid email address.'
  }
 else return true
};

export const passwordValidator=(password)=>{
  if(password?.length === 0){
    return 'Password is required.'
  }
  else{
    return true
  }
}

export const  getCookie=(name)=> {
  let cookieArray = document.cookie.split(';'); 
  for (let i = 0; i < cookieArray.length; i++) {
      let cookiePair = cookieArray[i].trim(); 
      if (cookiePair.startsWith(name + '=')) { 
          return cookiePair.substring(name.length + 1); 
      }
  }
  return null;
}
