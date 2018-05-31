import * as React from 'react';
import {Link} from 'react-router-dom';

export const HomePage = () => {
    return(<div>
        <Link to="/operations">
            Listado de Operaciones
        </Link>
    </div>);
}