import Http from "../../../common/http";

// const ENDPOINT = `/login`;


const signIn = (body) => {
 return Http.post('/login', body)
  .then(( res )=>{
    console.log('res: ',res);
    localStorage.setItem('Token', res.accessToken);
    return res;
  })
}

const signUp = (body) =>{
  return Http.post('/register', body).then((res)=>{
    console.log('REGISTRADO CORRECTAMENTE: ', res)
  });
}

// const login = async (body) => {
//     try{
//         const response = await Http.post(ENDPOINT, 
//         JSON.stringify({username: body.username, password: body.password}),
//         {
//           headers: {'Content-Type': 'application/json'},
//         });

//         return response;
//      }catch(err){
//        console.log(err);
//      }
// }

const AuthHttp = {
  signIn,
  signUp
}

export default AuthHttp;