// "use server"
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'
// import { prisma } from "@/api/data";

//   export type FormState = {
//   error: SubErrors
// }
//   export type SubErrors = {
//     name?:string;
//     email?:string;
//     location?:string;
//   }
 
 
//  export async function AskBot(prevState:FormState,formdata:FormData){
    
//     const name = formdata.get('name') as string
//     const email = formdata.get('email') as string
//     const location = formdata.get('location') as string

//     const client = new Groq({
//       apiKey: process.env.GROQ_API_KEY, // This is the default and can be omitted
//    });

//     const error:SubErrors ={}

//     if(!name){
//         error.name = "Name is required"
//     }
//     if(!email){
//       error.email = "email is required"
//   }
//   if(!location){
//       error.location = "location is required"
//   }
//     if(Object.keys(error).length > 0){
//        return{error}
//     }
  
//      const res = await client.chat.completions.create({
//         messages: [{ role: 'user', content: ` ${name}. ${location}. write a short business description, high density retail opportunities,      demographics analysis, foot traffic, and competitor insights of ${location}.`}],
//         model: 'openai/gpt-oss-20b',
//         });
//         const data = await prisma.user.create({
//           data: {
//             name,
//             email,
//             location,
//             message: res.choices[0].message.content
//           }
//         })
         

//     console.log('Form submitted successfully');

//     const cookieStore = await cookies()
    
//     cookieStore.set('formSuccess', 'true', {
//     httpOnly: true,
//     path: '/',
//     maxAge: 600, 
//   });

//      return redirect(`/success/${data.id}`)
//   }


//   export async function getUser(id:string){
//     try {

//       if (!id) return null;
//       const userId =  id;
//       const user = await prisma.user.findUnique({
//         where: {
//           id: userId,
//         },
//       });
      
//       return user;
//     } catch (error) {
//       console.error('Error fetching user:', error);
//       return null;
//     }
//   }