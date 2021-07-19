import React,{useState} from 'react';
// import AccountButton from './AccountButton';

const ValuesAccount = () => {

  const [register,setRegister] = useState(true);
  //onClick={() => setIsOpen(!isOpen)}
  let data;
  if (register===true){
    data = {
        registro: 'Registrarme',
        google: 'Registrarse con Google',
        createAccount:'Crear cuenta',
        withoutAccount: '¿Tenés cuenta? Logueate',
        withlogin : ''
      }
  }else{
    data = {
      registro: 'Iniciar sesión',
      google: 'Iniciar con Google',
      createAccount:'Iniciar sesión',
      withoutAccount:'¿Sin cuenta? Registrate',
      withlogin : '¿La olvidaste?'
    }
  }

  return (
    <>
        {/* <AccountButton field={data} setRegister={setRegister} register={register}/> */}
    </>
  )
}

export default ValuesAccount
