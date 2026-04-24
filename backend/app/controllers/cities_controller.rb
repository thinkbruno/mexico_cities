class CitiesController < ApplicationController
  def index
    if params[:state_id]
      
      @cities = City.where(state_id: params[:state_id])
    else
      @cities = City.all
    end
    
    render json: @cities
  end

  def show
    @city = City.find(params[:id])
    render json: @city
  end
end