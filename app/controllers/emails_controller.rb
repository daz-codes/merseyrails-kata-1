class EmailsController < ApplicationController
  def index
  end

  def show
    @email = Email.find(params[:id])

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.update("emails", target: "emails", partial: "emails/list", locals: { selected: @email }, **{ method: "morph" })
      end
      format.html # fallback for normal requests
    end
  end
end
