import { takeEvery, select, put, call, takeLatest } from 'redux-saga/effects';
import { IMAGES_SUCCESS, fetchImagesAction, DELETE_TODO, deleteTodoFromSaga } from '../actions';
import fetchImages from '../api';

const getPage = state => state.nextPage;

function* fetchImagesSaga() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(fetchImagesAction(images))
    } catch (error) {

    }
}

function* deleteTodoSaga({payload}) {
    yield put(deleteTodoFromSaga(payload))
}

function* rootSaga() {
/*  yield takeEvery(ADD_TODO, workerSaga); // non blocking
    yield take(ADD_TODO); //blocking
    yield call(workerSaga); */

    yield takeEvery(IMAGES_SUCCESS, fetchImagesSaga);
    yield takeLatest(DELETE_TODO, deleteTodoSaga);
}

export default rootSaga;
