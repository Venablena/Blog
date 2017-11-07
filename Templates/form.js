console.log("Forms");
function templateForm(){
  return`
  <div class="columns">
    <div class="column is-one-quarter">
    </div>
    <div class="column">
      <form id="createNew" name="createNew">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input id="post-title" class="input" type="text" placeholder="Text input" value="${post.title}">
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea id="post-body" class="textarea" placeholder="Textarea" value="${post.content}"></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">Save</button>
          </div>
          <div class="control">
            <a class="button is-text" href="index.html">Cancel</a>
          </div>
        </div>
      </form>
    </div>
    <div class="column is-one-quarter">
    </div>
  </div>
  `
}
