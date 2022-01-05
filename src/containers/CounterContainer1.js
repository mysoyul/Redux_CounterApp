import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store에 저장된 state 값을 UI컴포넌트(Counter)가 사용할 수 있도록 props로 연결해줍니다.
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

/* 해당 Aciont을 dispatch하는 함수를 만든 후 UI컴포넌트(Counter)가 사용할 수 있도록 props로 연결해줍니다.*/
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor() // 임시 getRandomColor()를 작성하여 변경할 예정
        dispatch(actions.setColor(color));
    }
});

/*Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 합니다.*/
const CounterContainer1 = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default CounterContainer1;