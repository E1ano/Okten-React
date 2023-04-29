import React, {Fragment, useReducer} from 'react';
import './CatDog.css';
import {useForm} from "react-hook-form";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CAT":
            const cat = {id: state.cats.slice(-1)[0]?.id + 1 || 1, name: action.payload};
            return {...state, cats: [...state.cats, cat]}
        case "ADD_DOG":
            const dog = {id: state.dogs.slice(-1)[0]?.id + 1 || 1, name: action.payload};
            return {...state, dogs: [...state.dogs, dog]}
        case "DEL_CAT":
            const catIndex = state.cats.findIndex(item => item.id === action.payload);
            state.cats.splice(catIndex, 1);
            return {...state}
        case "DEL_DOG":
            const dogIndex = state.dogs.findIndex(item => item.id === action.payload);
            state.dogs.splice(dogIndex, 1);
            return {...state}
        default :
            return state
    }

}

const initialCatDog = {
    cats: [],
    dogs: []
}
const CatDog = () => {
    const [state, dispatch] = useReducer(reducer, initialCatDog);
    const {reset: resetCat, register: registerCat, handleSubmit: handleSubmitCat} = useForm();
    const {reset: resetDog, register: registerDog, handleSubmit: handleSubmitDog} = useForm();

    const saveCat = (data) => {
        dispatch({type: "ADD_CAT", payload: data.cat});
        resetCat();
    }

    const saveDog = (data) => {
        dispatch({type: "ADD_DOG", payload: data.dog});
        resetDog();
    }

    return (
        <>
            <div className="form__wrapper">
                <form onSubmit={handleSubmitCat(saveCat)} className="form__block">
                    <label htmlFor="cat">Add Cat : </label>
                    <input type="text" min="2" max="22" required {...registerCat("cat")}/>
                    <button>SAVE</button>
                </form>

                <form onSubmit={handleSubmitDog(saveDog)} className="form__block">
                    <label htmlFor="dog">Add Dog : </label>
                    <input type="text" min="2" max="22" required {...registerDog("dog")}/>
                    <button>SAVE</button>
                </form>
            </div>
            <hr/>

            <div className="output">
                <div className="output__left">
                    <h2>Cats :</h2>
                    {
                        state.cats.map(item => (
                            <div key={item.id} className="item">
                                <span>{item.name}</span>
                                <button onClick={() => dispatch({type: "DEL_CAT", payload: item.id})}>DELETE</button>
                            </div>
                        ))
                    }
                </div>
                <div className="output__right">
                    <h2>Dogs :</h2>
                    {
                        state.dogs.map(item => (
                            <div key={item.id} className="item">
                                <span>{item.name}</span>
                                <button onClick={() => dispatch({type: "DEL_DOG", payload: item.id})}>DELETE</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CatDog;