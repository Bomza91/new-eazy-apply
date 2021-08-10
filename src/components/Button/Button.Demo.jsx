// import React from "react";
// import styled from "styled-components";
// import { Button } from "./Button";
// import { tokens } from "../../data/tokens";

// const DarkBg = styled.div`
//   widht: 100%;
//   background: rgb(${tokens.colors.purple});
// `;

// export const Demo = () => {
//   return (

//   <div>
//     <div>
//       <Button action="#">Hello World</Button>
//       </div>
  

//       <div>
//         <Button importance="secondary" action="#"> Hello World! </Button>
//       </div>
//       <div>
//         <Button importance="secondary" action="#" full>
//           {" "}
//           Hello World!{" "}
//         </Button>
//       </div>
//       <div>
//         <Button importance="primary" action="#"> Hello World! </Button>
//       </div>


//       <div>
//         <Button importance="secondary" full>
//           {" "}
//           Hello World!{" "}
//         </Button>
//       </div>
//       <div>
//         <Button importance="primary"> Hello World! </Button>
//       </div>
//       <DarkBg>

//       <div>
//           <Button importance="secondary" action="#" inverse>
//             {" "}
//             Hello World!{" "}
//           </Button>
//         </div>
//         <div>
//           <Button importance="secondary" action="#" full inverse>
//             {" "}
//             Hello World!{" "}
//           </Button>
//         </div>
//         <div>
//           <Button importance="primary" action="#" inverse>
//             {" "}
//             Hello World!{" "}
//           </Button>
//         </div>


//         <div>
//           <Button importance="secondary" inverse>
//             {" "}
//             Hello World!{" "}
//           </Button>
//         </div>
//         <div>
//           <Button importance="secondary" full inverse>
//             {" "}
//             Hello World!{" "}
//           </Button>
//         </div>
//         <div>
//           <Button importance="primary" inverse>
//             {" "}
//             Hello World!{" "}
//           </Button>
//         </div>
//       </DarkBg>
//     </div>
//   );
// };

// export default Demo;


import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { tokens } from "../../data/tokens";

const DarkBg = styled.div`
 width: 100%;
 background: rgb(${tokens.colors.purple});
`;
export const Demo = () => {
  return (
    <div>
      <div>
        <Button>Hello World </Button>
      </div>
      <div>
        <Button importance="secondary">Hello World </Button>
      </div>

      <div>
        <Button importance="secondary" full>Hello World </Button>
      </div>

      <div>
        <Button importance="primary">Hello World</Button>
      </div>

      <DarkBg>

      <div>
        <Button importance="secondary" inverse>Hello World </Button>
      </div>

        <div>
          <Button importance="secondary" full inverse>Hello World</Button>
        </div>

        <div>
          <Button importance="primary"  inverse>Hello World</Button>
        </div>

       
      </DarkBg>
    </div>
  );
};
export default Demo;

