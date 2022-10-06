import { ToolbarComponent } from './toolbar.component';

describe('toolbar Component', () => {
    it('Exists', () => {
    //assert
    expect(ToolbarComponent).toBeDefined();
});

    it ('Can be built', () => {
        //act
        const component = new ToolbarComponent();

        //assert
        expect(component instanceof ToolbarComponent).toBe(true);
    });


})
