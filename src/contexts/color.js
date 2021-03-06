import { createContext, useState } from 'react';

const ColorContext = createContext({ 
  state: { color: 'black', subcolor: 'red' },
  action: {
    setColor: () => {},
    setSubcolor: () => {}
  }
 })

 const ColorProvider = ({ children }) => {
   const [color, setColor] = useState('black');
   const [subcolor, setSubcolor] = useState('red');

   const value = {
     state: { color, subcolor },
     actions: {setColor, setSubcolor }
   }
   return (
     <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
   )
 }

 // const ColorConsumer = ColorContext.Consumer 와 같은 의미이다
 const { Consumer: ColorConsumer } = ColorContext;

 // ColorProvider 와 ColorConsumer 내보내기
 export { ColorProvider, ColorConsumer, ColorContext };

export default ColorContext;