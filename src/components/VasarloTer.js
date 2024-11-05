import React from 'react';
import Termek from './Termek';

function VasarloTer(props){
    return (
        <>{
                props.termeklista.map((i)=>{
                        return <Termek termek={i} key={i.id}/>
                    }
                )        
            }
        </>
      );
}
export default VasarloTer;