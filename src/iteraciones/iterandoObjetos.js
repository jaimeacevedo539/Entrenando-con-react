import React, { Component } from "react";

class Productos extends Component{
    state = {
        products: [
            {
                id:1,
                name: 'camisa',
                colors: ['#467367','#05fd88'],
                price: 20
            },
            {
                id:2,
                name: 'pantalon',
                colors: ['#D35EFF','#9956E8'],
                price: 40
            },
            {
                id:3,
                name:'pantaloneta',
                colors: ['#B32542','#FF6987'],
                price:50
            }
        ]
    }

    render(){
        return(
            <div>
                <h3>ITERANDO CON OBJETOS</h3>
                <div>
                    {this.state.products.map((product) => {
                        return (
                            <div>
                               $ {product.price}- {product.name}
                               <div>
                                {product.colors.map((color) => {
                                    return(
                                        <span 
                                        style={{
                                            width: '13px',
                                            height: '13px',
                                            borderRadius: '0.1em',
                                            border: '1px solid gray',
                                            display: 'inline-block',
                                            margin: '0.1em',
                                            background: color
                                        }}>

                                        </span>
                                    )
                                })}
                               </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Productos;