import axios from "axios";


const GetProducts = async (setProducts, dispatch) => {

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            // Generate a random index between 0 and i
            const j = Math.floor(Math.random() * (i + 1));
            // Swap the i-th element with the randomly selected j-th element
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    try {
        let datas = await axios.get('https://ecommerce-context-11a68-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
        datas = datas.data
        let arr = []

        for (let i in datas) {
            datas[i].id = i
            arr.push(datas[i])

        }
        // arr = arr.slice(0, 4)

        shuffleArray(arr)

        dispatch({ type: 'fetch', payload: arr })
        setProducts(arr)

    }
    catch (err) {
        console.log(err.message);
    }

}
export default GetProducts