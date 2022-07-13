class Nodo{

    info=0;
    liga=null;
}
export class Lista{
  
   INICIO=null;
   canvas=null;

    isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
    }///////////////////////////////////////////

    buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        while(tmp!=null){
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;
        }

        return encontrado;
    }///////////////////////////////////////////

   inserta_inicio(DATO){
       var P=this.INICIO;
       var Q=new Nodo();
       Q.info=DATO;
       Q.liga=P;
       P=Q;

       this.INICIO=P;
   }///////////////////////////////////////////

   inserta_final(DATO){
        var P=this.INICIO;
        var T=P;
        while(T.liga!=null){
            T=T.liga; 
        }
        var Q=new Nodo();
        Q.info=DATO;
        Q.liga=null;
        T.liga=Q;
        
        this.INICIO=P;
    }///////////////////////////////////////////

    inserta_antes_x (DATO,X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=null){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                X1.liga=P;
                P=X1;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    } ///////////////////////////////////////////

    inserta_despues_x(DATO,X){
        var P= this.INICIO;
        var Q=P;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=null){
                Q=Q.liga;
            }
            else {
                BAND=0;
            } 
        }
        if (BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else {
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
       this.INICIO =P;
    }///////////////////////////////////////////

    eliminar_inicio(){
        var Q;
       if(this.INICIO!=null){
           Q=this.INICIO;
           this.INICIO=Q.liga;
       }
       else
       {
        throw new Error("Lista Vacia");
       }
   }///////////////////////////////////////////

    eliminar_ultimo(){
       var Q;
       var R;
       if(this.INICIO!=null){
           Q=this.INICIO;
           while(Q.liga!=null){
               R=Q;
               Q=Q.liga;
           }
           if(this.INICIO==Q){
                this.INICIO=null;
           }
           else{
               R.liga=null;
           }
       }
       else{
            throw new Error("Lista vacia ");
           }
   }///////////////////////////////////////////

   eliminar_x (X) {
       var P=this.INICIO;
       var Q=P;
       var T=Q;
       var BAND=1;
       while(Q.info!=X && BAND==1){
           if(Q.liga!=null) {
               T = Q;
               Q = Q.liga;
           } else {
               BAND = 0;
           }
       }
       if (BAND == 0) {
            throw new Error("El elemento con informacion X no se encuentra en la lista");
       } else {
           if(P == Q) {
               P = Q.liga;
           } else {
               T.liga = Q.liga;
           }
       }
       this.INICIO =P;
   }///////////////////////////////////////////

   eliminar_antes_x(X){
    var P=this.INICIO;
    if(P.info==X){
        throw new Error("EL ELEMENTO NO TIENE UN NUMERO ANTERIOR");
    } else{
        var Q=P;
        var T=P;
        var R=new Nodo();
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=null){
                R=T;
                T=Q;
                Q=Q.liga;
            } else  BAND=0;
        }
        if(BAND==0){
            throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
        } 
        else if(P.liga==Q){
            P=Q;
        } else R.liga=Q;
    }
    this.INICIO =P;
    }///////////////////////////////////////////

    eliminar_despues_x(X){
    var P=this.INICIO;
    var Q=P;
    var T=P;
    var BAND=1;
    Q=Q.liga;
    while(T.info!=X && BAND==1){
        if(Q.liga!=null){
            T=Q;
            Q=Q.liga;
        } else  BAND=0;
    }
    if(T==P) {
        T.liga=Q.liga;
    }
    else if(BAND==0){
        throw new Error("EL ELEMENTO NO TIENE UN NUMERO POSTERIOR");
    } 
    else if(Q.liga==null){
        T.liga=null;
    } else {
        T.liga=Q.liga;
    }
    this.INICIO =P;
    }
    dibujarNodosLog(){
        var	tmp=this.INICIO;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.liga;
        }
        console.log(cad);
    }///////////////////////////////////////////

    dibujarNodos(valor){

        var canvas=this.canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this.INICIO;
        var cont = 0;
        
        var x=0;
        var y=0;
        var ctd=0;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);//limpia el canva 

        var nodo=null;

        while(tmp!=null){
            cont++;
            if(valor != undefined && tmp.info==valor){
                //Dibujar rectangulo
                ctx.beginPath();
                ctx.fillStyle = "rgb(153,255,153)";//VERDE
                ctx.fillRect (x,y, 55,30);
                
                nodo={};
                nodo.x=x;
                nodo.y=y;
                nodo.width=55;
                nodo.height=30;
                nodo.info=tmp.info;

            }
            else{
             //Dibujar rectangulo
             ctx.beginPath();
             ctx.fillStyle = "rgb(51,102,0)";  //VERDE OSCURO
             ctx.fillRect (x,y, 55,30);
            }    

            //texto
            ctx.fillStyle="black";
            ctx.font = '15px Arial';
            ctx.fillText(tmp.info,x+20,y+20);
            ctx.closePath();
            
            if(tmp.liga!=null){
                //Dibujar flecha
                //linea de la flecha
                ctx.beginPath();
                ctx.moveTo(x+55,y+15);
                ctx.lineTo(x+55+20,y+15);
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle="black";
                ctx.moveTo(x+55+20,y+10);
                ctx.lineTo(x+55+20+5,y+15);
                ctx.lineTo(x+55+20,y+20);
                ctx.closePath();
                ctx.fill();
            } else {
                //Dibujar flecha
                //linea de la flecha
                ctx.beginPath();
                ctx.moveTo(x+55,y+15);
                ctx.lineTo(x+55+20,y+15);
            
                ctx.moveTo(x+75,y+15);
                ctx.lineTo(x+75,y+70);

                ctx.moveTo(x+75,y+70);
                ctx.lineTo(15,y+70);

                ctx.moveTo(15,y+70);
                ctx.lineTo(15,y+30);
                
                
                
                ctx.closePath();
                ctx.stroke();
                //cabeza de la flecha
                ctx.beginPath();
                ctx.fillStyle="black";
                ctx.moveTo(10,y+35);
                ctx.lineTo(15,y+30);
                ctx.lineTo(20,y+35);
                ctx.closePath();
                ctx.fill();
            }
            

            x=80*++ctd;
            tmp=tmp.liga;
        }

        if(nodo!=null){

            setTimeout(function(){

                ctx.beginPath();
                ctx.fillStyle = "rgb(51,102,0)";//VERDE OSCURO
                ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
    
                //texto
                ctx.fillStyle="black";
                ctx.font = '15px Arial';
                ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                ctx.closePath();

            },2000);
           
        }
        
    }
}