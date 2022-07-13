import {Lista} from './lista.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function inserta_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
        lista.canvas=canvas;//despues contructor			
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null){
        return;
    }

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function inserta_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    try{
        if(lista.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("Ingrese valor de nodo");
        if(DATO==null)
            return;
        
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);

    }catch(e){
        await bootbox_alert(e.message);
    }
}//////////////////////////////////////////////////////////
export async function inserta_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    try{
        if(lista.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null)
                 return;

        if(lista.buscar(DATO)==true){
            throw new Error("EL NODO YA SE INGRESO");
        }
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X==null)
                return;
        
        
        lista.inserta_antes_x(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function inserta_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }

    try{
        if(lista.isVacio()==true){
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO==null)
                 return;

        if(lista.buscar(DATO)==true){
             throw new Error("EL NODO YA SE INGRESO");  
         }
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X==null)
                return;
        
        lista.inserta_despues_x(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.eliminar_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");

    }catch(e){

        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function eliminar_ultimo(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        lista.eliminar_ultimo();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){

        await bootbox_alert(e.message);
    }

    

}/////////////////////////////////////////////////////////
export async function eliminar_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;//despues contructor			
    }
    
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("Ingrese valor a eliminar");
        if(X==null) 
            return;

        lista.eliminar_x(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){

        await bootbox_alert(e.message);
    }
    
}////////////////////////////////////////////////////////
export async function eliminar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;//despues contructor			
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var X = await bootbox_prompt("Ingrese valor para eliminar el anterior");
        if(X==null)
            return;
            
        lista.eliminar_antes_x(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){

        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function eliminar_despues_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();
        lista.canvas=canvas;//despues contructor			
    }

    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("Ingrese valor para eliminar el posterior");
        if(X==null)
            return;
        lista.eliminar_despues_x(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();

        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){

        await bootbox_alert(e.message);
    }
    
    
}////////////////////////////////////////////////////////