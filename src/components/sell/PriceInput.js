import TextField from '@mui/material/TextField';
import ErrorMessage from '../ErrorMessage';

export default function PriceInput({isDisabled, register, errors}) {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", minWidth: "150px" }}>
                <label htmlFor="price" style={{ fontSize: "40px" }}>$</label>
                <TextField
                    id="price"
                    label="Precio"
                    variant="standard"
                    name="price"
                    disabled={isDisabled}
                    sx={{ maxWidth: "100px" }}
                    {...register("price", {
                        required: true,
                        pattern: /[0-9]/
                    })}
                />
            </div>

            {errors.price && errors.price.type === "required" && <ErrorMessage message="Debes ingresar un precio" small />}
            {errors.price && errors.price.type === "pattern" && <ErrorMessage message="Debes ingresar un número" small />}
        </div>
    )
}