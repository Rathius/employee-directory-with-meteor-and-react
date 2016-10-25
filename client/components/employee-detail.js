import React from 'react';

const EmployeeDetail = ( {employee} ) => {
	const { name, email, phone, avatar } = employee;
	
	return (
		<div className="col l4">
			<h4 className="header">{name}</h4>
			<div className="card">
				<div className="card-image">
					<img src={avatar} />
				</div>
				<div className="card-stacked">
					<div className="card-content">
						<ul className="collection">
							<li className="collection-item">Email: {email}</li>
							<li className="collection-item">Phone: {phone}</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	);
};

export default EmployeeDetail;



		
            
		

/*
        <div>
			<img src={avatar} />
			<div classNameName="caption">
				<h3>{name}</h3>
				<ul classNameName="list-group">
					<li classNameName="list-group-item">Email: {email}</li>
					<li classNameName="list-group-item">Phone: {phone}</li>
				</ul>
			</div>
		</div>
*/