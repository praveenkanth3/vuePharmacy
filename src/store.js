import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable */
export const store = new Vuex.Store(
    {
        state:{
            cartItem:[],
            total:0
        },
        mutations: {
            addToCart(state, payload) {
            state.cartItem.push(payload);
            state.total += payload.val.price * payload.qty;
            // console.log(state,payload);
            },
            deleteFromCart(state,payload){
                console.log(payload);
                state.total -= payload.item.val.price * payload.item.qty;
                state.cartItem.splice(payload.index,1)
            },
            proceedToBuy(state){
                state.total = 0;
                state.cartItem.length = 0;
                alert('Thank you for purchasing');
            }
          },
          getters:{
            cartProducts(state) {
                return state.cartItem;
            }
          },
          actions:{
            addToCart(context,payload){
                context.commit('addToCart',payload);

            },
            deleteFromCart(context,payload){
                context.commit('deleteFromCart',payload);
            },
            proceedToBuy(context){
                context.commit('proceedToBuy');
            }
          }

    }
)