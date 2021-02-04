// employee profile after login is completed 
import React, { Component } from 'react';



class Profile extends Component {
    render() {
        return (

        <div>  
            <div class="card cardstyle">
  <div class="card-body">
    <h1> Welcome Back</h1>
    
  </div>
</div>

                    {/* heading Card  */}
                    <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
             
               {/* Places I been card */}
            
        </div>
        )
    }

}
export default Profile