export default function (subcat = '', action){
    if(action.type == 'subCatFromFilter'){
        var newSubcat = action.subcat
        console.log("subCatFromFilter", newSubcat)
        return newSubcat;
    } else{
        return subcat

    }
}