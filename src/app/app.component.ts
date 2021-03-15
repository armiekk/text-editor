import { Component } from '@angular/core';
import * as CustomEditor from '../vendor/ckeditor5/build/ckeditor';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'text-editor';
  editor = CustomEditor;

  onEditorReady(editor: CKEditor5.Editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
}
