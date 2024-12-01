import { easeInOut } from "motion"

export const   SlideRight = (delay) => {
        return{
            hidden:{
                opacity : 0,
                x :-100
            },
            show :{
                opacity : 1,
                x:10,
                transition:{
                    duration : 0.6,
                    delay : delay,
                    ease : easeInOut
                }
            },
            exit : {
                opacity :0,
                x : 100,
                transition :{
                    duration : 0.3,
                    ease : easeInOut
                },
            }
        }
}
export default SlideRight