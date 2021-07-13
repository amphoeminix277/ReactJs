import React from 'react';


function Steps(props){

    return(
        <section>
            <h2>{props.title}</h2>
            <ol>
                {
                    props.steps.map((step,i)=>
                    <li key={i}>{step}</li>
                    )
                }
            </ol>
        </section>

    );
}

export default Steps;