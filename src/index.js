import render from 'fody';

export default function aukReact(Html) {
    return (app) => {
        app.context.render = function (Component, data) {
            this.body = render({
                context: this,
                Component,
                data,
                Html,
            });
        };
    };
}
