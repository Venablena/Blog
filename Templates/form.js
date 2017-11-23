function templateForm(post, formId){
  return`

    <div class="column is-half">
      <form id="${formId}" name="createNew">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input id="post-title" class="input" type="text" placeholder="Text input" value="${post.title}">
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea id="post-body" class="textarea" placeholder="Textarea" rows="16">${post.content}</textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">Save</button>
          </div>
          <div class="control">
            <a class="button is-text"  id="cancel">Cancel</a>
          </div>
        </div>
      </form>
    </div>


  `
}
