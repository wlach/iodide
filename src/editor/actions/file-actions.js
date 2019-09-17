import { getFilesForNotebookFromServer } from "../../shared/utils/file-operations";

export function getFiles() {
  return async (dispatch, getState) => {
    const notebookID = getState().notebookInfo.notebook_id;
    const files = await getFilesForNotebookFromServer(notebookID);
    dispatch({
      type: "UPDATE_FILES_FROM_SERVER",
      files
    });
  };
}
