import React from 'react';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WrappedComponent) => {//WrappedComponent dau vao chinh la homcomponent export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
    const colorRandom = getRandomColor();

    return (props) => (//props chinh la prop cua homcomponent
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />{/**cop prop dau vao truyen wrappedcomponent */}
        </div>
    )
}

export default Color;
