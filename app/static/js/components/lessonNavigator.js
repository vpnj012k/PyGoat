import { LessonGroup } from './lessonGroup.js';
import { LessonItem } from './lessonItem.js';

const LessonNavigator = function (props) {

    const [activeGroup, setActiveGroup] = React.useState(['none']);
    // const [state, reRender] = React.useState()

    if (!props.store.refresh.lessonNav) {
        props.store.refresh.lessonNav = {};
        props.store.refresh.lessonNav.setActiveGroup = setActiveGroup;
        // props.store.refresh.lessonNav.reRender = reRender;
    };

    const sideNavStyle = {
        width: props.width,
        backgroundColor: '#333333',
        height: '100%',
        display: 'flex'
    };

    const lessonSelectionStyle = {
        width: '100%',
        marginTop: '50px'
    };

    return React.createElement(
        'div',
        { style: sideNavStyle },
        React.createElement(
            'div',
            { style: lessonSelectionStyle },
            props.groups.map((x, i) => React.createElement(
                LessonGroup,
                { title: x.group, active: activeGroup === i, setActive: setActiveGroup, id: `${x}_${i}`, num: i, key: `${x}_${i}` },
                x.lessons && x.lessons.map((y, j) => React.createElement(LessonItem, { title: y.title, key: `${y.title}__${j}`, current: y.current, active: activeGroup === i, store: props.store }))
            ))
        )
    );
};

export { LessonNavigator };