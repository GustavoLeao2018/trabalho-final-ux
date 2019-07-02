<h3 class="w3-center">Controls</h3>
            
            <div class="w3-container w3-panel w3-card-2">
                <h4 class="w3-center">Tv</h4>
                <label for="status_controle_tv">Tv status: {{status_controle_tv}}</label>
                
                <input type="radio" class="w3-radio" name="status_controle_tv" id="status_controle_tv" value="On" ng-model="status_controle_tv" ng-checked="true" checked />
                <input type="radio" class="w3-radio" name="status_controle_tv" id="status_controle_tv" value="Off" ng-model="status_controle_tv"/>
                <br>
                <label for="status_controle_tv_volume">Volume: {{status_controle_tv_volume}}</label>
                <input type="range" class="w3-input" value="55" ng-disabled="status_controle_tv == 'Off'" id="status_controle_tv_volume" name="status_controle_tv_volume" ng-model="status_controle_tv_volume" step="5" min="0" max="100" >
                
                <label for="status_controle_tv_chanel">Channel: {{status_controle_tv_chanel}}</label>
                <input type="number" class="w3-input" value="55" ng-disabled="status_controle_tv == 'Off'" id="status_controle_tv_chanel" name="status_controle_tv_chanel" ng-model="status_controle_tv_chanel" step="1" min="0" max="100" >
                <br>
            </div>
            <div class="w3-container w3-panel w3-card-2">
                <h4 class="w3-center">Air Conditioner</h4>
                <label for="status_controle_air">Air Conditioner status: {{status_controle_air}}</label>
                
                <input type="radio" class="w3-radio" name="status_controle_air" id="status_controle_air" value="On" ng-model="status_controle_air" ng-checked="true" checked />
                <input type="radio" class="w3-radio" name="status_controle_air" id="status_controle_air" value="Off" ng-model="status_controle_air"/>
                <br>
                <label for="status_controle_air_temperature">Temperature: {{status_controle_air_temperature}} C°</label>
                <input type="range" class="w3-input" value="55" ng-disabled="status_controle_air == 'Off'" id="status_controle_air_temperature" name="status_controle_air_temperature" ng-model="status_controle_air_temperature" step="5" min="0" max="100" >
                
                <br>
            </div>
