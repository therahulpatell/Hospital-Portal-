import React from 'react';
import ChatBot from 'react-simple-chatbot';

export const SimpleForm = () => {
  
    return (
        <div>
                  {/*  <div class="container"> */}
                       <div class="row">
                           <ul>
                               <li> <a href="/home"><i class="fas fa-home"></i> Home</a></li>
                               <li><i class="fas fa-angle-double-right"></i>ChatBot</li>
                           </ul>
                       </div>
                  {/*  </div> */}
    <br/>
        <ChatBot 
        steps={[
          {
           id:'intro', 
           message:'Do you have any sort of query?', 
           trigger:'intro-user',
          },
          {
            id:'intro-user',
            options:[
                {value:'y',label:'Yes',trigger:'yes-response'},
                {value:'n',label:'No',trigger:'no-response'},
               ]
        },
        {
            id:'yes-response',
            message:'Great!..\ntype in your query pls:)',
            end:true,
        },
        {
            id:'no-response',
            message:'Sorry to hear that!',
            end:true,
        },
    ]}
    />
    </div>
    );
}


export default SimpleForm;
