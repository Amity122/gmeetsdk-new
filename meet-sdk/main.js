import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '815165385709';
const MAIN_STAGE_URL = 'https://amity122.github.io/gmeetsdk-new/meet-sdk/MainStage.html'

/**
 * Prepares the Add-on Side Panel Client, and adds an event to launch the
 * activity in the main stage when the main button is clicked.
 */
export async function setUpAddon() {
    console.log('Setting up addon...');
    try {
        const session = await meet.addon.createAddonSession({
            cloudProjectNumber: CLOUD_PROJECT_NUMBER,
        });
        console.log('Session created successfully');
        
        const sidePanelClient = await session.createSidePanelClient();
        console.log('Side panel client created');
        
        document
            .getElementById('start-activity')
            .addEventListener('click', async () => {
                console.log('Button clicked, launching main stage...');
                try {
                    await sidePanelClient.startActivity({
                        mainStageUrl: MAIN_STAGE_URL
                    });
                    console.log('Main stage launched successfully');
                } catch (error) {
                    console.error('Error launching main stage:', error);
                }
            });
    } catch (error) {
        console.error('Error in setUpAddon:', error);
    }
}

export async function initializeMainStage() {
    console.log('Initializing main stage...');
    try {
        const session = await meet.addon.createAddonSession({
            cloudProjectNumber: CLOUD_PROJECT_NUMBER,
        });
        console.log('Main stage session created');
        
        await session.createMainStageClient();
        console.log('Main stage client created successfully');
    } catch (error) {
        console.error('Error in initializeMainStage:', error);
    }
}