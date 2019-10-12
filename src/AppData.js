var data;
class AppData{
    constructor(){
        data=[];
    }
    setdata(newObj){
        data.push(newObj);
    }
    getData(){
        return data;
    }
}
var appdata=new AppData();
export default appdata;