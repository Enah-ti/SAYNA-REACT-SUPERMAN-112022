import React from 'react';
import { NavLink } from 'react-bootstrap'
export const PageNotFound = () => {
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <NavLink to="http://www.jquery2dotnet.com" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </NavLink><NavLink to="http://www.jquery2dotnet.com" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support </NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}