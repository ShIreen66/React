import { useForm } from "react-hook-form";
// npm i --save react-hook-form
const App = () => {
    const { register, 
      handleSubmit, 
      formState:{errors} } = useForm({defaultValues: {
        fullname: "John Doe",
        city: "indore",
      }});
    const submithandler = (data) => {
        console.log(data);
    };
    return (
        <div className="mt-10 w-[80%] mx-auto p-10 rounded bg-zinc-200 ">
            <h1 className="font-bold text-3xl underline mb-3">Form Handling</h1>
            <form onSubmit={handleSubmit(submithandler)}>
                <input
                    className="p-2 rounded mr-4 "
                    type="text"
                    placeholder="Full Name"
                    {...register("fullname", {required: "Full name is required"})}
                      
                />
                {errors.fullname && (
                  <p className="text-red-500">{errors.fullname.message}</p>
                )}
                <select {...register("city")}>
                  <option value="bhopal">Bhopal</option>
                  <option value="indore">Indore</option>
                </select>
                <input
                    className="p-2 rounded mr-4 "
                    type="Email"
                    placeholder="email@example.com"
                    {...register("email")}
                />
                <button className="py-2 px-4 bg-zinc-700 rounded text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;