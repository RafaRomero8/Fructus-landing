import { NotificationManager } from 'react-notifications';

const PostApi = async (data) => {

   // console.log(event.target.phone_number.value)
   // console.log(this.inputNode.value)
   // //Obtener los datos del FORM 

   const url = (process.env.REACT_APP_URL_API);

   console.log(data)
   console.log(url)

   return fetch(url,
      {
         method: 'POST',
         mode: "cors",
         headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
         },
         body: new URLSearchParams(data)
      })
      .then(data => data.json())
      .then((response) => {
         NotificationManager.success('Mensaje Enviado Correctamente')
         console.log(response);
         return true
      })
      .catch((e) => {
         NotificationManager.error('Error al enviar Mensaje')
         return false
      })
}

export default PostApi