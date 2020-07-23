import React from 'react';
import styled from 'styled-components';

export function ModalComponent() {

    return (
        <ModalWrapper>
            <div class="modal-overlay" id="modal-overlay">
                <div className = 'modal-inner'>
                    Hello from Modal component!
                </div>
            </div>
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div `
    background-color: dodgerblue;
    position: fixed;
    z-index: 2;
    width: 50%;
    height: 100%;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    .modal-overlay {
        
        .modal-inner {
            
        }
    }
`