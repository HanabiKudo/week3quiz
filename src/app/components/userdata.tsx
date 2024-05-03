import axios from "axios";
await function fetchUserData (userid: string){


try{
        const response = await axios.get
        {'https//:api.testquestion.com/user${userid}'};
        console.log ('User Data:', response.data);
        return response;


}catch(error){
        if (axios.isAxiosError(error)){
        console.error('error fetching user data:',(error));

} else {
        console.error ('A unexpected error occured:',(error) );


}

throw error;

}
}


        
