class EmailsController < ApplicationController
  def show
    @email = Email.find(params[:id])

    # This just sends a turbo-stream over ActionCable
    Turbo::StreamsChannel.broadcast_replace_to(
      "emails",                         # stream name (e.g., turbo_stream_from "emails" on the client)
      target: "emails",                 # DOM ID to replace
      partial: "emails/list",           # partial to render
      locals: { selected: @email }
    )

    # Continue with regular response if needed
    respond_to do |format|
      format.turbo_stream
      format.html
    end
  end
end
