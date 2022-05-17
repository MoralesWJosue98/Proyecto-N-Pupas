import { crudActionTypes } from "constants/strings";
import CrudButton from "components/buttons/crud";

const SaleCard = ({ history }) => {
    const handleOnUpdate = () => {
        alert("Próximamente se va a poder modificar");
    }

    const handleOnDelete = () => {
        alert("Próximamente se va a poder eliminar");
    }

    return (
        <article className="bg-white shadow-md p-4">
            <div className="flex flex-col mb-2  ">
                <h1 className="text-gray-500 font-bold text-xl">Venta ID</h1>
                <p> {` ${history.date}`} </p>

                <div className="font-bold flex flex-auto justify-between ">
                <p>{history.name}</p>
                <p>{`$${history.price}`}</p>
                </div>
                <div className="font-bold flex flex-auto justify-between text-primary-500 ">
                <p >Total </p>
                <p>{` $${history.total}`} </p>
                </div>
                <div>
                    <CrudButton actionType={crudActionTypes.update} onClickHandler={handleOnUpdate} />
                    <CrudButton actionType={crudActionTypes.delete} onClickHandler={handleOnDelete} />
                </div>
            </div>
        </article>
    );
};

export default SaleCard;