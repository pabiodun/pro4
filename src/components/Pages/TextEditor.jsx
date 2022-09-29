import React, { Component } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import {EditorState } from 'draft-js'

export class TextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
      }
      onEditorStateChange = (editorState)=>{
        this.setState({
          editorState,
        });
      };
        
  render() {
    const {editorState} = this.state;
    console.log(editorState.getCurrentContent);
    return (
      <div>
        <p style={{marginTop:'420px', marginLeft:'-720px', 
          fontSize:'12px', color:'black'}}>Content</p>          
                    <Editor
                    editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  wrapperStyle={{ width: 718, height: 300, 
                  border: "1px solid black", marginLeft:"-720px",
                  marginTop:'1rem', backgroundColor:'#fff' }}
                  onEditorStateChange={this.onEditorStateChange}
                />
      </div>
    )
  }
}

export default TextEditor
